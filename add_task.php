<?php
include 'database_connection.php';

if(isset($_POST['add'])){
    $task = $_POST['task'];
    $due_date = $_POST['due_date'];
    
    // Insert into database
    $sql = "INSERT INTO tasks (task, due_date) VALUES ('$task', '$due_date')";
    if ($conn->query($sql) === TRUE) {
        header("Location: index.php"); // Redirect back to the index page after adding task
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
