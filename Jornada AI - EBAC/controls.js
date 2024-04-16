 export default {
    jump: new KeyboardEvent('Keydown', { Key: 'Space', KeyCode: 32 }),
    crounch: new KeyboardEvent('keydown', { key: 'ArrowDown', keyCode: 40}),
    dispatch(event) {
        document.dispatchEvent(this[event]);

    }
 }