import {Row, Col, Divider } from 'antd';
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import {FileTextOutlined , FileWordOutlined } from '@ant-design/icons';
import { useTodos } from "./hooks/useTodos";
import { CustomHeader } from './Components/CustomHeader';
import { Content } from 'antd/es/layout/layout';

const TodoApp = () => {
    const { todos, handleNewTodo, handleRemoveTodo} = useTodos();

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <CustomHeader/>
            <Row>
                <Col span={12}>
                <div className="custom-sider">
                <div className="sider-content">
               <FileTextOutlined style={{ fontSize: '24px', marginRight: '8px'}} /> 
               <h3>Make New Task</h3>
              </div>
             <TodoAdd onNewTodo={handleNewTodo} />
              </div>
                </Col>
                <Col span={12}>
                                <div className="custom-content">
                                <div className="content-content">
                                    <FileWordOutlined style={{ fontSize: '24px', marginRight: '8px', color: 'black'}} /> 
                                    <h3 style={{ color: 'black'}}>All Tasks</h3>
                                </div>
                                    <TodoList
                                        todos={todos}
                                        onDeleteTodo={handleRemoveTodo}
                                    />
                                </div>
                </Col>
            </Row>
        </div>
    );
}

export default TodoApp;