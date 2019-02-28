const initState={
    posts:[
        {id:'1',title:'Hello',body:"hELLO BODY"},
        {id:'2',title:'World',body:"wORLD BODY"},
        {id:'3',title:'!',body:"! BODY"}
    ]
}


const rootReducer=(state=initState,action)=>{
    return state;
}


export default rootReducer