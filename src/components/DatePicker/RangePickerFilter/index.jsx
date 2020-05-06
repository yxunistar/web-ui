import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import Button from "Button";
import Dater from "utils/Dater";
import RangePicker from "../RangePicker";
import ThemeConsumer from "Theme/ThemeConsumer";
import "./style.sass";

class RangePickerFilter extends React.Component {
    constructor(props) {
        super(props);
        this.today = new Date();
        this.startDate = new Date(new Date().setDate(this.today.getDate() - 90));
        this.state = {
            start: {
                minDate: this.startDate,
                maxDate: this.today,
                date: this.today,
            },
            end: {
                minDate: this.startDate,
                maxDate: this.today,
                date: this.today,
            },
            selectRange: "TODAY",
        };
    }
    dateFormatter = date => Dater.format(date, { format: "YYYY-MM-DD" });

    handleDate = (day = 0) => {
        const date = new Date(new Date().setDate(this.today.getDate() + day));
        const today = new Date(new Date().setDate(this.today.getDate()));

        this.setState({
            start: {
                ...this.state.start,
                date,
            },
            end: {
                ...this.state.end,
                date: day === -1 ? date : today,
            },
        });
        this.props.onFilterChange(this.dateFormatter(date), this.dateFormatter(day === -1 ? date : today));
    };

    selectRange = rangeType => {
        switch (rangeType) {
            case "TODAY":
                this.handleDate();
                break;
            case "YESTERDAY":
                this.handleDate(-1);
                break;
            case "SEVEN_DAY":
                this.handleDate(-6);
                break;
            case "FIFTEEN_DAY":
                this.handleDate(-14);
                break;
            case "THIRTY_DAY":
                this.handleDate(-29);
                break;
            case "NINETY_DAY":
                this.handleDate(-89);
                break;
        }
        this.setState({ selectRange: rangeType });
    };

    handleStartDateChange = startDate => {
        this.props.onStartDateChange(this.dateFormatter(startDate));
        this.setState({
            end: {
                ...this.state.end,
                minDate: startDate,
            },
            selectRange: "",
        });
    };

    handleEndDateChange = endDate => {
        this.props.onEndDateChange(this.dateFormatter(endDate));
        this.setState({ selectRange: "" });
    };

    render() {
        const { selectRange, start, end } = this.state;
        return (
            <ThemeConsumer>
                {({ getThemeClass }) => (
                    <div className={cx(getThemeClass("range-picker-filter", this.props.theme))}>
                        <Button
                            type="custom"
                            className={cx({
                                active: selectRange === "TODAY",
                            })}
                            onClick={() => this.selectRange("TODAY")}
                        >
                            今日
                        </Button>
                        <Button
                            type="custom"
                            className={cx({
                                active: selectRange === "YESTERDAY",
                            })}
                            onClick={() => this.selectRange("YESTERDAY")}
                        >
                            昨日
                        </Button>
                        <Button
                            type="custom"
                            className={cx({
                                active: selectRange === "SEVEN_DAY",
                            })}
                            onClick={() => this.selectRange("SEVEN_DAY")}
                        >
                            近7日
                        </Button>
                        <Button
                            type="custom"
                            className={cx({
                                active: selectRange === "FIFTEEN_DAY",
                            })}
                            onClick={() => this.selectRange("FIFTEEN_DAY")}
                        >
                            近15日
                        </Button>
                        <Button
                            type="custom"
                            className={cx({
                                active: selectRange === "THIRTY_DAY",
                            })}
                            onClick={() => this.selectRange("THIRTY_DAY")}
                        >
                            近30日
                        </Button>
                        <Button
                            type="custom"
                            className={cx({
                                active: selectRange === "NINETY_DAY",
                            })}
                            onClick={() => this.selectRange("NINETY_DAY")}
                        >
                            近90日
                        </Button>
                        <RangePicker
                            start={start}
                            end={end}
                            onStartDateChange={startDate => this.handleStartDateChange(startDate)}
                            onEndDateChange={endDate => this.handleEndDateChange(endDate)}
                        />
                    </div>
                )}
            </ThemeConsumer>
        );
    }
}

RangePickerFilter.propTypes = {
    onStartDateChange: PropTypes.func,
    onEndDateChange: PropTypes.func,
    onFilterChange: PropTypes.func,
};

RangePickerFilter.defaultProps = {
    onStartDateChange: () => {},
    onEndDateChange: () => {},
    onFilterChange: () => {},
};

export default RangePickerFilter;
