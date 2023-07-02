import { Component, push } from '@/core';
import Editor from '../../components/Editor/Editor';
import styles from './PostEdit.module.css';
import { PostStore } from '@/store/PostStore';

export default class PostEdit extends Component {
  async setup() {
    const [, , id] = location.pathname.split('/');
    await PostStore.dispatch({ actionType: 'GET_POST', payload: { id } });
  }

  templates() {
    return `<section class='${styles.Editor} Editor'>postEdit</section>`;
  }

  mounted() {
    const $editor = this.$target.querySelector('.Editor');
    Component.attach({
      constructor: Editor,
      $target: $editor,
    });
  }
}
