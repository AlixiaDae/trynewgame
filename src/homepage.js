const dom = (() => {
    const main = document.createElement('div')
    main.classList.add('main-box')
    document.body.appendChild(main)

    const logBox = document.createElement('div')
    logBox.classList.add('log-box')
    main.appendChild(logBox)

    const commandTextBox = document.createElement('input')
    commandTextBox.classList.add('command-box')
    logBox.appendChild(commandTextBox)


})()

export default dom