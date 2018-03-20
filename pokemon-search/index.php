<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <title>CURL TEST</title>
</head>
<body>
    <!-- <?php
        function apiCall($name){
            $ch = curl_init();
            $timeout = 5;
            curl_setopt($ch, CURLOPT_URL, 'http://pokeapi.co/api/v2/pokemon/'.$name);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
            $data = curl_exec($ch);
            $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);
            if ($http_code != 200) {
                return json_encode('An error has occured.');
            }
            return $data;
        }
    ?> -->
    <form action="curl.php" method="POST">
        <input type="text" name="pokemon" placeholder="enter name or id of pokemon">
        <input type="submit">
    </form>
    <!-- <script type="text/javascript">
    $("form").submit(function(){
        var str = $(this).serialize();
        $.ajax('curl.php'), str, function(result){
            console.log(result);
        }
        return(false);
    });
    </script> -->

</body>
</html>
