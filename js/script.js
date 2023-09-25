function saveProfessor() {
    var professorName = document.getElementById('professorName').value;

    if (professorName) {
        // Obter a lista de nomes existentes do Local Storage (se existir)
        var storedNames = localStorage.getItem('professorNames');
        var professorNames = storedNames ? JSON.parse(storedNames) : [];

        // Adicionar o novo nome à lista
        professorNames.push(professorName);

        // Armazenar a lista atualizada no Local Storage
        localStorage.setItem('professorNames', JSON.stringify(professorNames));

        alert('Professor ' + professorName + ' foi salvo com sucesso!');
    } else {
        alert('Por favor, insira o nome do professor.');
    }
}

function saveCourse() {
    var courseName = document.getElementById('courseName').value;

    if (courseName) {
        // Obter a lista de nomes de cursos existentes do Local Storage (se existir)
        var storedCourseNames = localStorage.getItem('courseNames');
        var courseNames = storedCourseNames ? JSON.parse(storedCourseNames) : [];

        // Adicionar o novo nome do curso à lista
        courseNames.push(courseName);

        // Armazenar a lista atualizada no Local Storage
        localStorage.setItem('courseNames', JSON.stringify(courseNames));

        alert('Curso ' + courseName + ' foi salvo com sucesso!');
    } else {
        alert('Por favor, insira o nome do curso.');
    }
}


function saveRoomNumber() {
    var roomNumber = document.getElementById('roomNumber').value;

    if (roomNumber) {
        // Obter a lista de números de salas existentes do Local Storage (se existir)
        var storedRoomNumbers = localStorage.getItem('roomNumbers');
        var roomNumbers = storedRoomNumbers ? JSON.parse(storedRoomNumbers) : [];

        // Adicionar o novo número da sala à lista
        roomNumbers.push(roomNumber);

        // Armazenar a lista atualizada no Local Storage
        localStorage.setItem('roomNumbers', JSON.stringify(roomNumbers));

        alert('Número da sala ' + roomNumber + ' foi salvo com sucesso!');
    } else {
        alert('Por favor, insira o número da sala.');
    }
}


function saveClassPeriod() {
    var classPeriod = document.getElementById('classPeriod').value;

    if (classPeriod) {
        // Obter a lista de períodos de turmas existentes do Local Storage (se existir)
        var storedClassPeriods = localStorage.getItem('classPeriods');
        var classPeriods = storedClassPeriods ? JSON.parse(storedClassPeriods) : [];

        // Adicionar o novo período da turma à lista
        classPeriods.push(classPeriod);

        // Armazenar a lista atualizada no Local Storage
        localStorage.setItem('classPeriods', JSON.stringify(classPeriods));

        alert('Período da turma ' + classPeriod + ' foi salvo com sucesso!');
    } else {
        alert('Por favor, insira o período da turma.');
    }
}


function saveClassTime() {
    var classTime = document.getElementById('classTime').value;

    if (classTime) {
        // Obter a lista de horários de aulas existentes do Local Storage (se existir)
        var storedClassTimes = localStorage.getItem('classTimes');
        var classTimes = storedClassTimes ? JSON.parse(storedClassTimes) : [];

        // Adicionar o novo horário de aula à lista
        classTimes.push(classTime);

        // Armazenar a lista atualizada no Local Storage
        localStorage.setItem('classTimes', JSON.stringify(classTimes));

        alert('Horário da aula ' + classTime + ' foi salvo com sucesso!');
    } else {
        alert('Por favor, insira o horário da aula.');
    }
}


function saveSubjectName() {
    var subjectName = document.getElementById('subjectName').value;

    if (subjectName) {
        // Obter a lista de nomes de disciplinas existentes do Local Storage (se existir)
        var storedSubjectNames = localStorage.getItem('subjectNames');
        var subjectNames = storedSubjectNames ? JSON.parse(storedSubjectNames) : [];

        // Adicionar o novo nome da disciplina à lista
        subjectNames.push(subjectName);

        // Armazenar a lista atualizada no Local Storage
        localStorage.setItem('subjectNames', JSON.stringify(subjectNames));

        alert('Nome da disciplina ' + subjectName + ' foi salvo com sucesso!');
    } else {
        alert('Por favor, insira o nome da disciplina.');
    }
}


window.onload = function() {
    var professorNames = JSON.parse(localStorage.getItem('professorNames'));
    var courseNames = JSON.parse(localStorage.getItem('courseNames'));
    var roomNumbers = JSON.parse(localStorage.getItem('roomNumbers'));
    var classPeriods = JSON.parse(localStorage.getItem('classPeriods'));
    var classTimes = JSON.parse(localStorage.getItem('classTimes'));
    var subjectNames = JSON.parse(localStorage.getItem('subjectNames'));

    var tableBody = document.getElementById('tableBody');

    // Verifica se há dados a serem exibidos
    if (professorNames && professorNames.length > 0) {
        for (var i = 0; i < professorNames.length; i++) {
            var row = document.createElement('tr');

            var cell1 = document.createElement('td');
            cell1.textContent = professorNames[i];
            row.appendChild(cell1);

            var cell2 = document.createElement('td');
            cell2.textContent = courseNames[i] || '-';
            row.appendChild(cell2);

            var cell3 = document.createElement('td');
            cell3.textContent = roomNumbers[i] || '-';
            row.appendChild(cell3);

            var cell4 = document.createElement('td');
            cell4.textContent = classPeriods[i] || '-';
            row.appendChild(cell4);

            var cell5 = document.createElement('td');
            cell5.textContent = classTimes[i] || '-';
            row.appendChild(cell5);

            var cell6 = document.createElement('td');
            cell6.textContent = subjectNames[i] || '-';
            row.appendChild(cell6);

            tableBody.appendChild(row);
        }
        
  
    }
}

function removerItemTabela(TabAll) {
    let professorNames = JSON.parse(localStorage.getItem('professorNames')) || [];
    let courseNames = JSON.parse(localStorage.getItem('courseNames')) || [];
    let roomNumbers = JSON.parse(localStorage.getItem('roomNumbers')) || [];
    let classPeriods = JSON.parse(localStorage.getItem('classPeriods')) || [];
    let classTimes = JSON.parse(localStorage.getItem('classTimes')) || [];
    let subjectNames = JSON.parse(localStorage.getItem('subjectNames')) || [];
  
    if (TabAll >= 0 && TabAll < professorNames.length) {

      professorNames.splice(TabAll, 1);
      courseNames.splice(TabAll, 1);
      roomNumbers.splice(TabAll, 1);
      classPeriods.splice(TabAll, 1);
      classTimes.splice(TabAll, 1);
      subjectNames.splice(TabAll, 1);
  
      localStorage.setItem('professorNames', JSON.stringify(professorNames));
      localStorage.setItem('courseNames', JSON.stringify(courseNames));
      localStorage.setItem('roomNumbers', JSON.stringify(roomNumbers));
      localStorage.setItem('classPeriods', JSON.stringify(classPeriods));
      localStorage.setItem('classTimes', JSON.stringify(classTimes));
      localStorage.setItem('subjectNames', JSON.stringify(subjectNames));
  
  }
  
  window.onload = function () {
    var professorNames = JSON.parse(localStorage.getItem('professorNames')) || [];
    var courseNames = JSON.parse(localStorage.getItem('courseNames')) || [];
    var roomNumbers = JSON.parse(localStorage.getItem('roomNumbers')) || [];
    var classPeriods = JSON.parse(localStorage.getItem('classPeriods')) || [];
    var classTimes = JSON.parse(localStorage.getItem('classTimes')) || [];
    var subjectNames = JSON.parse(localStorage.getItem('subjectNames')) || [];
  
    var tableBody = document.getElementById('tableBody');
  
    if (professorNames.length > 0) {
      for (var i = 0; i < professorNames.length; i++) {
        var row = document.createElement('tr');
  
        var cell1 = document.createElement('td');
        cell1.textContent = professorNames[i];
        row.appendChild(cell1);
  
        var cell2 = document.createElement('td');
        cell2.textContent = courseNames[i] || '-';
        row.appendChild(cell2);
  
        var cell3 = document.createElement('td');
        cell3.textContent = roomNumbers[i] || '-';
        row.appendChild(cell3);
  
        var cell4 = document.createElement('td');
        cell4.textContent = classPeriods[i] || '-';
        row.appendChild(cell4);
  
        var cell5 = document.createElement('td');
        cell5.textContent = classTimes[i] || '-';
        row.appendChild(cell5);
  
        var cell6 = document.createElement('td');
        cell6.textContent = subjectNames[i] || '-';
        row.appendChild(cell6);
  
        var cell7 = document.createElement('td');
        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = function (index) {
          return function () {

            var removed = removerItemTabela(index);
            if (removed) {

                tableBody.removeChild(tableBody.childNodes[index]);
            }
          };
        }(i); 
        cell7.appendChild(removeButton);
        row.appendChild(cell7);
  
        tableBody.appendChild(row);
      }
    }
  };
}
  


