export default class MainService  {

    dataList = ""

    constructor({targetEl}) {
        this.targetEl = targetEl;
        this.dataList = "";
    }

    init(dataList) {
        this.dataList = dataList.flat(2).join('');
        return this.render(this.dataList);
    }

    render(data) {
        return `<span>${data}</span>`
    }

}