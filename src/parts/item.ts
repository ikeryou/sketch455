import { MyDisplay } from "../core/myDisplay";
import { Tween } from "../core/tween";
import { Val } from "../libs/val";

// -----------------------------------------
//
// -----------------------------------------
export class Item extends MyDisplay {

  private _input: HTMLInputElement
  public get input(): HTMLInputElement {
    return this._input
  }

  private _selected: boolean = false
  private _wait: Val = new Val(0)

  private _itemId: number
  public get itemId(): number {
    return this._itemId
  }

  constructor(opt:any) {
    super(opt)

    this._itemId = opt.id
    this._input = this.qs('input') as HTMLInputElement

    this._resize()
  }

  public change(delay:number):void {
    Tween.a(this._wait, {
      val: [0, 1]
    }, 0.1, delay, Tween.EaseNone, () => {
      this._selected = !this._selected
      this._input.checked = this._selected
    })
  }

  protected _update():void {
    super._update()
  }

  protected  _resize(): void {
    super._resize()
  }
}







