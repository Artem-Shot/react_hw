import './App.css'
import Hello from '../components/Hello.jsx'
import FuncComponent from '../components/FuncComponent.jsx'
import React from "react";
//
//
// function App() {
//     return(
//         <div className='App'>
//             <Hello />
//             <FuncComponent name={'qqq'}/>
//         </div>
//     )
// }
//
// export default App;


// import {Component} from 'react';
//
// class Message extends Component {
//     conditionalRender(isAdmin) {
//         let content;
//
//         if (isAdmin) {
//             content = <p>Адміністратор: доступ до всіх розділів</p>;
//         } else {
//             content = <p>Користувач: обмежений доступ</p>;
//         }
//
//         return <div>{content}</div>;
//     }
//
//     render() {
//         const {showMessage} = this.props;
//         return (
//             <div>
//                 {!showMessage ? 'Message hidden' : 'Full Message: ternary operator used.'}
//                 <hr />
//                 {showMessage && 'Full Message: logic AND(&&) operator used. Shorter syntax'}
//                 <hr />
//                 {this.conditionalRender(true)}
//             </div>
//         );
//     }
// }
//
// export default Message;




// class HtmlRender extends React.Component {
//     render() {
//         const htmlString = 'This <i>text</i> should be rendered <b>"as is"</b>';
//         return (
//             <ul>
//                 <li dangerouslySetInnerHTML={{ __html: htmlString }} />
//                 <li>{htmlString}</li>
//                 {/*<div dangerouslySetInnerHTML={{ __html: '<p>content<p>' }}>more content</div>;  Error!*/}
//             </ul>
//         );
//     }
// }
//
// export default HtmlRender;


// class CssRender extends React.Component {
//     render() {
//         const divStyle = {
//             color: 'blue',
//             fontSize: '50px',
//         };
//
//         return <div style={divStyle} className="btn btn-success">Hello World!</div>;
//     }
// }
//
// export default CssRender;

function ClickExample() {
    // Звичайна функція або стрілочна функція, яка викликається при кліку
    const handleClick = (event) => {
        console.log(event)
        alert('Кнопку натиснули!');
    };

    return (
        <button onClick={handleClick}>
            Натисни мене
        </button>
    );
}

export default ClickExample;