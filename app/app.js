'use strict'

// DOM Elements
const username = document.getElementById('username');
const task = document.getElementById('task');

const form = document.getElementById('form');

// DOM Quiry
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // uses of sweet alert
    swal({
        title: `Good job! The task created by ${username.value} with success`,
        text: `Save this task : ${task.value}.`,
        icon: "success",
        buttons: {
            cancel: {
                text: "Cancel",
                value: false,
                visible: true,
                className: "cancelbtn",
                closeModal: true,
            },
            confirm: {
                text: "OK",
                value: true,
                visible: true,
                className: "confirmbtn",
                closeModal: true
            }
        }
    })
    .then((value) => {
        setTimeout(() => {
            if(value) {
                    swal({
                        title: "Task saved with success",
                        icon: "success"
                    });
            } else {
                    swal({
                        title: "Task deleted",
                        icon: "warning",
                    });
            }
        }, 5000);
    });

});