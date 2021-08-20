declare module '*.scss' {
    const content: { [key: string]: string };
    export default content;
  }
  declare module '*.sass' {
    const content: { [key: string]: string };
    export default content;
  }
  declare module 'react-markup';
  declare module '*.webp';
  declare module '*.png';
  declare module '*.jpg';
  declare module '*.jpeg';
  declare module '*.svg';
  declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}