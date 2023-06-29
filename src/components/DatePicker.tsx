import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DatePicker as RADatePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Popover,
} from "react-aria-components";
import { CalendarIcon } from "../assets";

const DatePicker = () => {
  return (
    <RADatePicker className="w-full max-w-[320px]">
      <Group className="flex relative">
        <DateInput className="flex items-center w-full h-[50px] bg-[rgba(255,255,255,0.15)] text-sm text-white placeholder:text-white px-4 border-[2px] border-solid border-white rounded-xl focus:outline-none focus:ring focus:ring-violet-300">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        <Button className="absolute top-3 right-3">
          <img src={CalendarIcon} alt="icon" className=" text-white" />
        </Button>
      </Group>

      <Popover>
        <Dialog className="bg-white p-3 rounded-md">
          <Calendar>
            <header className="flex justify-between">
              <Button slot="previous">◀</Button>
              <Heading />
              <Button slot="next">▶</Button>
            </header>

            <CalendarGrid>
              {(date) => <CalendarCell date={date} />}
            </CalendarGrid>
          </Calendar>
        </Dialog>
      </Popover>
    </RADatePicker>
  );
};

export default DatePicker;
