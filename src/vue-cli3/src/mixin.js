export default {
  methods: {
    /**
     * 文字列をケバブケース化する 
     * @param str : 変換する文字列
     * @return str : ケバブケース化された文字列
     */
    getKebabCase (str) {
      return str.replace(' ', '-')
    }
  }
}
