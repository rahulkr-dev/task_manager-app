export const initialData = {
    tasks:{
        // task_1:{
        //     id:'task_1',content:"take out this garbage"
        // },
        // task_2:{
        //     id:"task_2",content:"this is a bug"
        // },
        // task_3:{
        //     id:"task_3",content:"what you are trying"
        // }
    },
    columns:{
        column_1:{
            id:"column_1",
            title:"To Do",
            taskIds:[]
        },
        column_2:{
            id:"column_2",
            title:"In Progress",
            taskIds:[]
        },
        column_3:{
            id:"column_3",
            title:"Completed",
            taskIds:[]
        }
    },
    columnOrder:['column_1',"column_2","column_3"]

}