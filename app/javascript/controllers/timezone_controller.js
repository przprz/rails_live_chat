import { Controller } from "@hotwired/stimulus"

export class TimezoneController extends Controller {
    static targets = ["time"]

    timeTargetConnected(element) {
        this.#convertToLocalTime(element);
    }

    #convertToLocalTime(element) {
        const utcTime = new Date(element.dataset.utcTime)
        element.innerText =
          utcTime.toLocaleString("pl-PL", {
              timeZone: "Europe/Warsaw"
          })
    }
}
