<!DOCTYPE html>
<html>
<head>
    <title>To-Do List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>To-Do List</h1>
        <form class="add-task" method="POST" action="add_task.php">
            <input type="text" name="task" placeholder="Enter Task" required>
            <input type="date" class="due_date" name="due_date" required>
            <button type="submit" class="add-task button" name="add">Add Task</button>
        </form>
        <ul>
            <?php
            include 'database_connection.php';

            // Fetch tasks from database
            $sql = "SELECT * FROM tasks";
            $result = $conn->query($sql);

            // Display tasks
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo "<li class='task'>".$row["task"]."<br> Due: ".$row["due_date"]."
                          <div class='task-actions'>
                          <a href='delete_task.php?delete=".$row["id"]."' 
                          class='delete-button' onclick='return confirm(\"Are you sure you want to delete this task?\");'>Delete</a></div></li>";

                }
            } else {
                echo "<p>No tasks added yet.</p>";
            }

            $conn->close();
            ?>
        </ul>
    </div>
</body>
</html>
