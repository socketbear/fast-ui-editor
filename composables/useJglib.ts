import dayjs from "dayjs";
// const beautifyJs = require("js-beautify");
// const beautifyHtml = require("js-beautify").html;
import beautifyJs from "js-beautify";
const beautifyHtml = beautifyJs.html;

export const useJglib = () => {
  return {
    callSandbox() {
      console.log("beautifyJs :>> ", beautifyJs);
      console.log("beautifyJs.html :>> ", beautifyJs.html);
    },
    getUniqueKey() {
      const prefix = dayjs().format("YYMMDDHHmmssSSS");
      const randomStr = Math.random().toString(36).substring(2, 9);
      return prefix + randomStr;
    },
    prettyHtml(htmlString: string) {
      return beautifyHtml(htmlString, {
        indent_size: 2,
        space_in_empty_paren: true,
        indent_level: 2,
      });
    },
    prettyJs(jsString: string) {
      return beautifyJs(jsString, {
        indent_size: 2,
        space_in_empty_paren: true,
      });
    },
    timeout(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    isEmpty(value: any) {
      // 빈 값 체크
      if (value === undefined) {
        return true;
      }
      if (typeof value === "number") {
        if (value === 0) {
          return true;
        }
      } else if (typeof value === "string") {
        if (value === "" || value.length === 0) {
          return true;
        }
      } else if (typeof value === "object") {
        if (Array.isArray(value)) {
          if (value.length === 0) {
            return true;
          }
        } else if (!value) {
          return true;
        } else if (Object.keys(value).length === 0) {
          return true;
        }
      }
      return false;
    },
    prettyNumber(num: number) {
      if (this.isEmpty(num)) {
        return "0";
      }
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  };
};
