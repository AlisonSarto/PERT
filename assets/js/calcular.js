$(window).on("load", () => {
    $(".form-control").on("keyup", function () {
        const $TO = $("#TO");
        const $TN = $("#TN");
        const $TP = $("#TP");

        const valTO = Number($TO.val());
        const valTN = Number($TN.val());
        const valTP = Number($TP.val());

        // Verificar se todos os campos têm valores não vazios e são maiores que zero
        if (
            valTO !== "" &&
            valTN !== "" &&
            valTP !== "" &&
            Number($("#TU").val()) !== ""
        ) {
            // Verificar se todos os valores são maiores que zero
            if (valTO > 0 && valTN > 0 && valTP > 0) {
                if (valTP > valTN && valTN > valTO) {
                    $("#calc").prop("disabled", false);
                } else {
                    $("#calc").prop("disabled", true);
                }
            } else {
                $("#calc").prop("disabled", true);
            }
        } else {
            $("#calc").prop("disabled", true);
        }
    });
    $("#calc").click(function () {
        const TO = $("#TO").val();
        const TN = $("#TN").val();
        const TP = $("#TP").val();
        const TU = $("#TU").val().toLowerCase();

        const result = (parseInt(TO) + 4 * parseInt(TN) + parseInt(TP)) / 6;
        let resultFormat = Number(result.toFixed(2));
        if (result === resultFormat) {
            resultFormat = Math.trunc(result);
        }
        $("#result").html(`
        <div class="alert alert-success d-flex justify-content-center align-items-center gap-2">
            <i class="fa-solid fa-check"></i>
            <p class="m-0 p-0">A estimativa da tarefa é de: <b>${resultFormat} ${TU}</b></p>
        </div>
        `);
    });
    $(document).on("keydown", function (event) {
        if (event.keyCode === 13) {
            if (!$("#calc").is(":disabled")) {
                $("#calc").click();
            }
        }
    });
});
