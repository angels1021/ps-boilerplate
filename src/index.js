import { getUsers, deleteUser } from './api/userApi';

getUsers().then(users => {
  const tabelBody = users.map(user => (
    `<tr>
        <td><button type="button" data-id="${user.id}" class="deleteUser"><span>Delete</span></button></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td><a href="mailto:${user.email}">${user.email}</a></td>
    </tr>`
  ));

  global.document.getElementById('users').innerHTML = tabelBody.join('');

  const deleteButtons = global.document.getElementsByClassName('deleteUser');

  Array.from(deleteButtons, btn => (
    btn.onclick = (ev) => { // eslint-disable-line no-param-reassign
      const element = ev.target.nodeName === 'SPAN' ? ev.target.parentNode : ev.target;
      ev.preventDefault();
      deleteUser(element.attributes['data-id'].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    }
  ));
});
