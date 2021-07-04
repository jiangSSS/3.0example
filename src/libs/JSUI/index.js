
import TreeMenu from "./treeMenu"
import MenuItem from "./treeMenu/MenuItem"
import SubMenu from "./treeMenu/SubMenu"
import ReSubMenu from "./treeMenu/ReSubMenu"

import Carousel from "./Carousel"
import CarItem from "./Carousel/item"

import Magnifier from "./Magnifier"

let JSUI = {}

JSUI.install = function (Vue) {
  Vue.component(TreeMenu.name, TreeMenu)
  Vue.component(MenuItem.name, MenuItem)
  Vue.component(SubMenu.name, SubMenu)
  Vue.component(ReSubMenu.name, ReSubMenu)

  Vue.component(Carousel.name, Carousel)
  Vue.component(CarItem.name, CarItem)

  Vue.component(Magnifier.name, Magnifier)
}

export default JSUI