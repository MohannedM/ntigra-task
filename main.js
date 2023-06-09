// Accordion function
document.querySelector('.m_table-striped').addEventListener('click', (ev) => {
    const parentTableRow = ev.target.closest('tr')
    const currentTableHead = parentTableRow.querySelector('th')

    if (currentTableHead.scope === 'row') {
        const columnsArray = [].slice.call(parentTableRow.children)
        
        const firstName = columnsArray[1].innerText
        const lastName = columnsArray[2].innerText
        const birthYear = columnsArray[3].innerText

        const accordion = `
        <table id="accordionHeader" style="background-color: #efefef; margin-bottom: 50px; width: 200px;">
        <thead>
            <tr>
                <th>➡</th>
                <th>${firstName}</th>
                <th>${lastName}</th>
            </tr>
        </thead>
        <tbody style="display:none">
            <tr>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${birthYear}</td>
            </tr>
        </tbody>
    </table>
    `
    document.querySelector('.m_bottom-data-section').innerHTML = `${accordion}`
    document.querySelector('.m_bottom-data-section').addEventListener('click', (ev) => {
        const tbody = ev.target.closest('section').querySelector('tbody')
        tbody.style.display = tbody.style.display === 'none' ? 'contents' : 'none'
    })
    }
})
// Searching function
const childRows = [].slice.call(document.querySelector('.m_table-striped > tbody').children)
document.querySelector('.m_mb-12').addEventListener('click', ev => {
    const classListArray = [].slice.call(ev.target.classList)
    if (classListArray.includes('m_form-control')) {
        ev.target.addEventListener('keydown', (event) => {
            if (event.target.value === '') {
                document.querySelector('.m_table-striped > tbody').innerHTML = ''
                childRows.forEach(row => {
                    document.querySelector('.m_table-striped > tbody').innerHTML += row.innerHTML
                })
            } else {
                const keyword = event.target.value.toLowerCase()  
                // console.log(childRows[0].innerText)
                const filteredRows = childRows.filter(function(childRow){
                    let user = childRow.innerText
                    user = user.toLowerCase()
                    console.log(keyword)
                   return user.includes(keyword)
                })
                document.querySelector('.m_table-striped > tbody').innerHTML = ''
                filteredRows.forEach(row => {
                    document.querySelector('.m_table-striped > tbody').innerHTML += row.innerHTML
                })
            }
        })
    }
})