export default function Courses(props) {

    return (

        <div className="Courses-d shadow p-3 mb-5 bg-body-tertiary rounded' " >
            <p>{props.name}</p>
            <p>{props.location}</p>
            <p>{props.duration}</p>
            <p>{props.status}</p>
            <button className="btn">التفاصيل</button>
        </div>

    )
}
