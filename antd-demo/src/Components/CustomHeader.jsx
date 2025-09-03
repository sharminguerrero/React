import { CalendarOutlined } from '@ant-design/icons';

export const CustomHeader = () => {
  return (
    <div className='custom-header'>
    <CalendarOutlined style={{ fontSize: '24px', color: '#ff4546' }} />
    <h2 style={{ color: '#ff4546'}}>Todo App</h2>
    </div>
  )
}
