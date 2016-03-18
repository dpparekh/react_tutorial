export default class NameProvider{
  constructor(){
    this.Names = ['Dhaval', 'Chad', 'Jonathan', 'Gautam'];
  }

  GetName(){
    let i = Math.floor(Math.random() * 4);
    return this.Names[i];
  }
}
