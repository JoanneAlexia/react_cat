import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';
import './Modal.css';

function Modal(props){

    let styleColor = {
        backgroundColor: props.colorScheme
    };

    return ReactDOM.createPortal(
        <CSSTransition 
            in={props.show}
            unmountOnExit
            timeout={{ enter:0, exit: 300}}>
            <div className={`modal ${props.show ? 'show' : ''} `} onClick={props.onClose}>
                <div style={styleColor} className="modal-content" onClick={e => e.stopPropagation()}>
                   <button className="login-form-close" onClick={props.onClose} ><i class="fas fa-times"></i></button>
                    {props.children}
                </div>    
            </div>
        </CSSTransition>, document.getElementById('modal')
    )
}

export default Modal;