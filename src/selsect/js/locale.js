/**
 * Created by GXD on 2017/12/7.
 *
 */
import { t } from './locale';

export default {
  methods: {
    t(...args) {
      return t.apply(this, args);
    }
  }
};
