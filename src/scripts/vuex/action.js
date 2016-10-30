export const changeIndex = function ({ dispatch, state }, tabIndex) {
  dispatch('CHANGEINDEX', tabIndex)    //dispatch专门调用mutations里的方法
}
