import React, { Component } from 'react';
import Scheduler from './components/Scheduler';
import MessageArea from './components/MessageArea';
import './Schedulerapp';
import Topbar from '../../pages/Admin/Topbar';
import Appbar from '../../pages/Admin/Appbar';

class App extends Component {
    state = {
        currentTimeFormatState: true,
        messages: []
    };

    addMessage(message) {
        const maxLogLength = 5;
        const newMessage = { message };
        const messages = [
            newMessage,
            ...this.state.messages
        ];

        if (messages.length > maxLogLength) {
            messages.length = maxLogLength;
        }
        this.setState({ messages });
    }

    logDataUpdate = (action, ev, id) => {
        const text = ev && ev.text ? ` (${ev.text})` : '';
        const message = `event ${action}: ${id} ${text}`;
        this.addMessage(message);
    }

    handleTimeFormatStateChange = (state) => {
        this.setState({
            currentTimeFormatState: state
        });
    }

    render() {
        const { currentTimeFormatState, messages } = this.state;
        return (
            <div>

                <Topbar/>
                <Appbar/>
            <div>
                <div className='scheduler-container'>
                    <Scheduler
                        
                        timeFormatState={currentTimeFormatState}
                        onDataUpdated={this.logDataUpdate}
                    />
                </div>
                <MessageArea
                    messages={messages}
                />
            </div>

            </div>
        );
    }
}
export default App;
