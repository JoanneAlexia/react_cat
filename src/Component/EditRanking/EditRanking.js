import "./EditRanking.css";

function EditRanking(props){
    return(
        <> 
            <div className="editRanking">
                <button className="editRanking-remove"><i class="fas fa-minus"></i></button>
                <input className="editRanking-text" type="text" value="1"></input>
                <button className="editRanking-add"><i class="fas fa-plus"></i></button>
            </div>
        </>
    );
}

export default EditRanking;