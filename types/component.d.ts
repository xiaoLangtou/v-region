import { MethodOptions } from 'vue'

/**
 * 区域元素基本模型
 */
export declare interface RegionItem {
  key: string
  value: string
}

export declare interface RegionModel {
  /** 省份模型 */
  province: RegionItem
  /** 城市模型 */
  city: RegionItem
  /** 区域模型 */
  area: RegionItem
  /** 村镇模型 */
  town: RegionItem
}

/**
 * 用户输入模型
 */
export declare interface RegionInputModel {
  /** 省份编码 */
  province: string
  /** 城市编码 */
  city: string
  /** 区域编码 */
  area: string
  /** 村镇编码 */
  town: string
}

export declare interface CommonProps {
  /** 输入区域模型 */
  modelValue: RegionInputModel
  /**
   * 启用城市级别
   * @default true
   */
  city?: boolean
  /**
   * 启用区、县级别
   * @default true
   */
  area?: boolean
  /**
   * 启用村、镇级别
   * @default false
   */
  town?: boolean
  /**
   * 语言
   * @default 'CN'
   */
  language?: string
  /** v-model 内容修改响应事件 */
  'onUpdate:modelValue': (val: RegionInputModel) => void
  /** 内容修改后的响应事件 */
  onChange?: (data: RegionModel) => void
}

export declare interface CommonMethods extends MethodOptions {
  /** 重置数据 */
  reset: () => void
}
