


const root = $('#root');

// Render page
function render(data) {
    Title('Phonebook');
    const table = Table('pb_table');

    TableHeader(table, ['Name', 'Phone']);

    let index = 0;
    for (let i of data) {
        TableDataRow(table, i, ['nimi', 'puhelin'], index++);
    }
}

// Create title for page
function Title(text) {
    const title = $('<h1></h1>').text(text);
    root.append(title);
}

// Create table
function Table(id) {
    const table = $('<table></table>');
    table.attr({
        id: id
    });
    root.append(table);
    return $('#'+id);
}

// Create table header
function TableHeader(table, cols) {
    const row = $('<tr></tr>');
    for (let i of cols) {
        const th = $('<th></th>').text(i);
        row.append(th);
    }
    table.append(row);
}

// Create table data row
function TableDataRow(table, item, cols, index) {
    const row = $('<tr></tr>');
    row.css({
        background: index % 2 == 0 ? '#BFBFBF' : '#ddd'
    });
    for (let i of cols) {
        const value = item[i];
        const th = $('<td></td>').text(value);
        row.append(th);
    }
    table.append(row);
}


