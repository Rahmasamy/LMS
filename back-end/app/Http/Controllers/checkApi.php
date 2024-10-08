<?php
namespace App\Http\Controllers;

trait checkApi
{
    use apiResponseTrait;


    // Status messages mapping
    private function getStatusMessages()
    {
        return [
            200 => 'The Page is found.',
            201 => 'Course added successfully.',
            400 => 'Error in adding Course',
            404 => 'The Page is not Found',
            // Add other status messages as needed
        ];
    }


    // Method to check the request and return a proper response
    public function checkRequest($data, $statusCode)
    {
        // Get the corresponding message for the status code
        $statusMessages = $this->getStatusMessages();
        $msg = 'Unexpected status code.';


        if (array_key_exists($statusCode, $statusMessages)) {
            $msg = $statusMessages[$statusCode];
        }

        if ($statusCode == 200) {
            $stat = 404;
        } elseif ($statusCode == 201) {
            $stat = 400;
        }
        $data = json_decode($data, true);


        if (!is_null($data)) {

            if (is_object($data)) {
                $dataArray = get_object_vars($data);
                if (count($dataArray) > 0) {

                    return $this->apiResponce($data, [$msg], $statusCode);
                }

            } else {
                if (count($data) > 0) {
                    return $this->apiResponce($data, [$msg], $statusCode);
                }
            }
        }

        return $this->apiResponce(null, "Not access", $stat);
    }

}