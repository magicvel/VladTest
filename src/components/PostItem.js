import React, {useState} from 'react';

const PostItem = (props) => {
    const [showActionDropdown, setShowActionDropdown] = useState('hide');
    function showActionDropdownHandler(){
        if(showActionDropdown==='hide')
          setShowActionDropdown('show')
        else
          setShowActionDropdown('hide')
      }

 
      
    return (
        <div className='form'>
        
            <div key={props.post.id}>
                <div>{props.number} {props.post.title}</div>
                <br/>
                <button 
                onClick={ () => showActionDropdownHandler() }
                >
                    Показать текст
                </button>
                <p 
                className={`${showActionDropdown}`}
                >{props.post.body}
                </p>
                <button onClick={() => props.remove(props.post)}>Удалить</button>
            </div>
            
    </div>
    );
};

export default PostItem;