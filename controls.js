 export default {
    jump: new KeyboardEvent('Keydown', {Key: 'Space', KeyCode: 32}),
    dispatch(event) {
        document.dispatchEvent(thiss[event]);
    }
 }