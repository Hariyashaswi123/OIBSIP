<script>
    function showMessage() {
        var email = document.getElementsByName("email")[0].value;
        var message = document.getElementById("message");

        if (email === "") {
            message.style.display = "block";
        } else {
            message.style.display = "none";
        }
    }
</script>