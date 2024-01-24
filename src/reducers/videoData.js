const initial = {
  videos : []
}



export default function (state = initial, action){
  console.log("reducert data  : ", action);
  switch (action.type) {
    default:
      return state;
  }
}