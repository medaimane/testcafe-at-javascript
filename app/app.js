'use strict'

// DOM Elements
// inputs
const username = document.getElementById('username');
const task = document.getElementById('task');
const checkbox = document.getElementById('checkbox');

// the form
const form = document.getElementById('form');
const title = document.getElementById('title');

// Events
form.addEventListener('submit', (e) => { 
    e.preventDefault();

    // uses of sweet alert
    swal({
        title: `Good job! The task created by ${username.value} with success`,
        text: `Save this task : ${task.value}.`,
        icon: "info",
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
        if(value) {
            swal({
                title: "Task saved with success",
                icon: "success",
                buttons: {
                    done: {
                        text: "Done",
                        visible: true,
                        className: "donebtn",
                        closeModal: true,
                    },
                }
            });
        } else {
            swal({
                title: "Task deleted",
                icon: "warning",
                buttons: {
                    done: {
                        text: "Done",
                        visible: true,
                        className: "donebtn",
                        closeModal: true,
                    },
                }
            });
        }
        title.innerHTML = `Thank you, ${username.value}!`;
    });

});