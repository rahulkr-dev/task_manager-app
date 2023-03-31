export const initialData = {
    tasks:{
        task_1:{
            id:'task_1',content:"take out this garbage"
        },
        task_2:{
            id:"task_2",content:"this is a bug"
        },
        task_3:{
            id:"task_3",content:"what you are trying"
        }
    },
    columns:{
        column_1:{
            id:"column_1",
            title:"To Do",
            taskIds:['task_1','task_2','task_3']
        }
    },
    columnOrder:['column_1']

}