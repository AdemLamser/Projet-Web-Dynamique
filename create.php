<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/db.php';
include_once '../../classes/Post.php';

$database = new Database();
$db = $database->getConnection();

$post = new Post($db);

$data = json_decode(file_get_contents("php://input"));

if (
    !empty($data->title) &&
    !empty($data->content) &&
    !empty($data->category) &&
    !empty($data->username)
) {
    $post->title = $data->title;
    $post->content = $data->content;
    $post->category = $data->category;
    $post->username = $data->username;

    if ($post->create()) {
        http_response_code(201);
        echo json_encode(array("message" => "Post was created."));
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to create post."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to create post. Data is incomplete."));
}
?>
