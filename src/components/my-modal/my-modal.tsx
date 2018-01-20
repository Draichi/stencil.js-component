import { Component, Method, Element, Prop, State, Event, EventEmitter } from '@stencil/core'

@Component({
    tag: 'my-modal',
    styleUrl: 'my-modal.scss'
})

export class MyModal {
    buttons = ['Okay', 'CLose'];
    //the value will be the element itself
    // and will be aplied by stencil
    @Element() modalElement: HTMLElement;

    @Prop() title: string;
    @Prop() content: string;

    @State() showOptions = false;

    @Event() onClose: EventEmitter;

    @Method()
    open () {
        this.modalElement.style.display = 'block'
    }
    closeModalHandler() {
        // this.modalElement.style.display = 'none'
        this.showOptions = false;
        this.onClose.emit();
    }
    showOptionsHandler() {
        this.showOptions = true;
    }

    render() {
        let options = null;
        if (this.showOptions) {
            options = (
                this.buttons.map(btn => (
                    <button onClick={this.closeModalHandler.bind(this)}>{btn}</button>
                ))
            )
        }
        return (
            <div>
                <h1>{this.title}</h1>
                <h2>{this.content}</h2>
                <hr/>
                <button onClick={this.showOptionsHandler.bind(this)}>Show options</button>
                <hr/>
                {options}
            </div>
        )
    }
}