import http from "k6/http";
import { sleep } from "k6";

export default function() {
  for (let id = 9800000; id < 9810000; id++){
    http.get(`http://localhost:3002/${id}`);
  }
  sleep(1);
};
