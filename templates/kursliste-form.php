<script src="bundles/markocupicsacpilatus/js/search_form_courselist.js"></script>
<script>
    var request_token = '<?= REQUEST_TOKEN ?>';
</script>

<div class="filter-board">
    <label for="ctrl_eventYear">Jahr</label>
    <select class="form-control filter-select" name="year" id="ctrl_eventYear">
        <option value="0"<?= !\Input::get('year') ? ' selected' : '' ?>>----</option>

        <?php for ($i = intval(\Date::parse('Y')) + 1; $i > 2015; $i--): ?>
            <?php if (\Input::get('year') != '')
            {
                $selected = \Input::get('year') == $i ? ' selected' : '';
            }
            ?>
            <option value="<?= $i ?>"<?= $selected ?>>Jahr <?= $i ?></option>
        <?php endfor; ?>
    </select>
    <br>

    <label for="ctrl_courseTypeLevel1">Was m&ouml;chtest Du unternehmen?</label>
    <select class="form-control filter-select" name="kursart" id="ctrl_courseTypeLevel1">
        <option value="0">alle Kurse zeigen</option>
        <?php $mainTypes = CourseMainTypeModel::findAll(); ?>
        <?php while ($mainTypes->next()): ?>
            <optgroup label="<?= $mainTypes->name ?>">
                <?php $subTypes = CourseSubTypeModel::findByPid($mainTypes->id); ?>
                <?php while ($subTypes->next()): ?>
                    <option value="<?= $subTypes->id ?>"> <?= $subTypes->name ?></option>
                <?php endwhile; ?>
            </optgroup>
        <?php endwhile; ?>
    </select>
    <br>

    <!--<h4>Organisierende Sektion ausw&auml;hlen:</h4>-->
    <div id="organizers">
        <?php foreach ($GLOBALS['TL_CONFIG']['SAC-PILATUS-CONFIG']['organizers'] as $i => $v): ?>
            <div class="checkbox-container"><label><input class="ctrl_sektion" type="checkbox" name="og" value="<?= $i ?>" checked> <?= $v ?></label></div>
        <?php endforeach; ?>
    </div>
    <br>

    <div class="form-group">
        <label for="ctrl_suche">Im Text suchen:</label>
        <input type="text" class="form-control" name="textsuche" id="ctrl_suche" placeholder="Suchen">
    </div>


    <label for="ctrl_dateStart">Kurse anzeigen ab:</label>
    <input type="hidden" id="ctrl_dateStartHidden" value="0">

    <div class="input-group date">
        <input type="text" id="ctrl_dateStart" class="form-control" data-date-now="<?= \Date::parse('d-m-Y') ?>" placeholder="dd-mm-yyyy" value="">
        <span class="input-group-addon">
      <i class="fa fa-th"></i>
    </span>
    </div>
</div>





