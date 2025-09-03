import { useForm } from "./hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {

   const {description1, description2, onInputChange, onResetForm} = useForm ({
      description1: '',
      description2: ''
   });

   const charLimit1 = 50;
   const charLimit2 = 75;

   const onFormSubmit = (event) => {
    event.preventDefault();
    if (description1.length <= 1 || description2.length <= 1) return;

    const newTodo = {
        id: new Date().getTime(),
        done: false,
        description1: description1,
        description2: description2,
    }
    onNewTodo(newTodo);
    onResetForm();
   }

  return (
    <>
    <div className="col-5">
    <form onSubmit={onFormSubmit}>
            <h4>{description1.length}/{charLimit1}</h4>
            <input
            type="text"
            placeholder="todo app with react"
            className="form-control col-1"
            name="description1"
            value={description1}
            onChange={(e) => {
                if (e.target.value.length <= charLimit1) {
                    onInputChange(e);
                }
            }}
            style={{ 
                backgroundColor: 'white',
                width: '85%', 
                height: '40px',
                marginLeft: '45px',
                border: '1px solid #ccc', 
                borderRadius: '4px' ,
                color: 'black',
                fontWeight: 'bold'
            }} 
        />

        <hr/>

        
        <h4>{description2.length}/{charLimit2}</h4>
           <input
            type="text"
            placeholder="https://reactjsexample.com/"
            className="form-control col-1"
            name="description2"
            value={description2} 
            onChange={(e) => {
                if (e.target.value.length <= charLimit2) {
                    onInputChange(e);
                }
            }}
            style={{ 
                backgroundColor: 'white' ,
                width: '85%', 
                height: '110px',
                marginLeft: '45px' ,
                border: '1px solid #ccc', 
                borderRadius: '4px',
                color: 'black',
                fontWeight: 'bold'
              }} 
           />
           <hr/>

           <button
            type="submit"
            className="ant-btn ant-btn-primary ant-btn-outline mt-1"
            >
            Create New Task
            </button>
    </form>
    </div>
    </>
  )
}
