import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { RedLeaf, OrangeLeaf, GreanLeaf } from './Icons';
import './Map.css';

const jsonString =
    '{"data":[{"report_id":1,"priority":1,"title":"A","status":"draft","lat":10.783889,"lng":106.73472},{"report_id":2,"priority":1,"title":"B","status":"received","lat":10.846667,"lng":106.77778},{"report_id":3,"priority":1,"title":"C","status":"handling","lat":10.856389,"lng":106.7625},{"report_id":4,"priority":3,"title":"D","status":"resolved","lat":10.863889,"lng":106.782776},{"report_id":5,"priority":3,"title":"E","status":"rejected","lat":10.882222,"lng":106.76889},{"report_id":6,"priority":1,"title":"F","status":"resolved","lat":10.884167,"lng":106.73028},{"report_id":7,"priority":2,"title":"G","status":"rejected","lat":10.843611,"lng":106.79139},{"report_id":8,"priority":3,"title":"H","status":"handling","lat":10.81,"lng":106.73333},{"report_id":9,"priority":3,"title":"I","status":"rejected","lat":10.771944,"lng":106.715},{"report_id":10,"priority":1,"title":"J","status":"handling","lat":10.833056,"lng":106.755},{"report_id":11,"priority":3,"title":"K","status":"received","lat":10.782222,"lng":106.70278},{"report_id":12,"priority":3,"title":"L","status":"handling","lat":10.772521,"lng":106.69802},{"report_id":13,"priority":3,"title":"M","status":"handling","lat":10.789167,"lng":106.696945},{"report_id":14,"priority":3,"title":"N","status":"received","lat":10.783408,"lng":106.69077},{"report_id":15,"priority":1,"title":"O","status":"resolved","lat":10.758333,"lng":106.735},{"report_id":16,"priority":1,"title":"P","status":"handling","lat":10.751667,"lng":106.72056},{"report_id":17,"priority":3,"title":"Q","status":"received","lat":10.851667,"lng":106.69722},{"report_id":18,"priority":3,"title":"R","status":"resolved","lat":10.881111,"lng":106.63528},{"report_id":19,"priority":3,"title":"S","status":"handling","lat":10.722222,"lng":106.611115},{"report_id":20,"priority":1,"title":"T","status":"received","lat":10.8025,"lng":106.6},{"report_id":21,"priority":3,"title":"U","status":"handling","lat":10.768889,"lng":106.62666},{"report_id":22,"priority":2,"title":"V","status":"received","lat":10.779167,"lng":106.63472}],"return_code":1,"return_message":"Success","sub_return_code":1000,"sub_return_message":"Success"}';

interface Report {
    report_id: number;
    priority: number;
    title: string;
    status: string;
    lat: number;
    lng: number;
}
interface ReponseData {
    data: Report[];
    return_code: number;
    return_message: string;
    sub_return_code: number;
    sub_return_message: string;
}

function Map() {
    const data: ReponseData = JSON.parse(jsonString);
    const markers = data.data.map((marker) => (
        <Marker
            key={marker.report_id}
            position={[marker.lat, marker.lng]}
            icon={
                marker.priority === 1
                    ? GreanLeaf
                    : marker.priority === 2
                    ? OrangeLeaf
                    : RedLeaf
            }
        >
            <Popup>
                <h4>{marker.title}</h4>
                {marker.status}
                <br />
                <Link to='/reportor'>Xem chi tiết</Link>
            </Popup>
        </Marker>
    ));
    return (
        <MapContainer
            center={[10.783889, 106.73472]}
            zoom={13}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {markers}
        </MapContainer>
    );
}

export default Map;
