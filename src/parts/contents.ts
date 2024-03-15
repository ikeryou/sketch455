import { Func } from "../core/func";
import { MyDisplay } from "../core/myDisplay";
import { Tween } from "../core/tween";
import { Util } from "../libs/util";
import { Item } from "./item";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {

  private _item: Array<any> = []
  private _tg: HTMLElement
  // private _noise: number = Util.randomInt(0, 180)

  constructor(opt:any) {
    super(opt)

    this._c = Util.randomInt(0, 360)

    const org = this.qs('.l-input') as HTMLElement
    this._tg = this.el

    this._tg.addEventListener('click', () => {
      this._eClickInput()
    })

    const num = 5
    for (let i = 0; i < num; i++) {
      const el = org.cloneNode(true) as HTMLElement
      this._tg.appendChild(el)

      this._item.push(
        new Item({
          el: el,
          id: i
        })
      )
    }
    org.remove()
  }

  protected _eClickInput():void {
    // Util.shuffle(this._item)
    this._item.forEach((v, i) => {
      v.change(i * 0)
    })
  }

  protected _update():void {
    super._update()

    const sw = Func.sw()
    const sh = Func.sh()

    if(this._c % 1 === 0) {
      const size = Math.min(sw, sh) * Func.val(0.1, 0.15)
      Tween.set(this._tg, {
        width: size,
        height: size,
      })

      this._item.forEach((v, i) => {
        const id = v.itemId
        Tween.set(v.el, {
          width: size / this._item.length,
          height: size,
          filter: `hue-rotate(${i * 180 / this._item.length + this._c * 5}deg)`
        })
        Tween.set(v.input, {
          width: size,
          height: size,
          x: id * (-size / this._item.length)
        })

      })
    }
  }

  protected  _resize(): void {
  }
}