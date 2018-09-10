<?php

ini_set('display_errors', 'On');
error_reporting(E_ALL);

?>
<form action="" method="POST" enctype="multipart/form-data">
<input type="file" name='image' src="" alt="">
<input type="submit" value="send" name='send'>
</form>

<?php

if(isset($_POST['send'])) {
  echo "<pre>" . print_r($_FILES, true); 

  $path = '/home/xxxx/Documents/insertion-form/frontend/images';
  $info = pathinfo($_FILES['image']['name']);
  $name = basename($_FILES["image"]["name"]);

  move_uploaded_file($_FILES['image']['tmp_name'], "$path/$name");

}
