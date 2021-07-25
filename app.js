const app = Vue.createApp({
  data() {
    return {
      list: "",
      lists: [],
      editListBoolean: false,
      editListText: "",
      editIndex: null,
    };
  },
  methods: {
    onSubmit() {
      if (this.list === "") {
        alert("請輸入文字");
        return;
      }

      this.lists.push(this.list);
      this.list = "";
    },
    deleteList(index) {
      this.lists.splice(index, 1);
    },
    editList(index) {
      this.list = this.lists[index];
      this.editListBoolean = true;
      this.editIndex = index;
    },
    updateList() {
      this.editListText = this.list;
      this.lists[this.editIndex] = this.editListText;

      //reset
      this.editListBoolean = false;
      this.list = "";
      this.editIndex = null;
    },
    clear() {
      this.lists = [];
    },
  },
});

app.mount("#app");
