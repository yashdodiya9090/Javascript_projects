const body = document.querySelector('body')
const tableContainer = document.querySelector('.table-container')

body.addEventListener('keydown', (e) => {
    tableContainer.innerHTML = `
        <table border="1">
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
            </tr>
            <tr>
                <td>${e.key === ' ' ? 'Space' : e.key}</td>
                <td>${e.code}</td>
            </tr>
        </table>
        `
})