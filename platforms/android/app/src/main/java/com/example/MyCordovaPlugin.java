/**
 */
package com.example;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.apache.cordova.PluginResult.Status;
import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;

import android.util.Log;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

public class MyCordovaPlugin extends CordovaPlugin {
  private static final String TAG = "MyCordovaPlugin";

  public void initialize(CordovaInterface cordova, CordovaWebView webView) {
    super.initialize(cordova, webView);

    Log.d(TAG, "Initializing MyCordovaPlugin");
  }

  public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
    if(action.equals("echo")) {
      JSONObject jsonObject = args.getJSONObject(0);
      String username = jsonObject.getString("userName");
      String password = jsonObject.getString("password");
      String server = jsonObject.getJSONObject("server").getString("ip");
      String port = jsonObject.getJSONObject("server").getString("port");

      String encript = null;
      try {
        encript = this.generateEncrypt(username+"|"+server+"|"+password+"|"+port)+"|sQrmA/0yvg1u9BozEcL9Yg==";
      } catch (Exception e) {
        e.printStackTrace();
      }

      final PluginResult result = new PluginResult(PluginResult.Status.OK, encript);
      callbackContext.sendPluginResult(result);
    } else if(action.equals("getDate")) {
      // An example of returning data back to the web layer
      final PluginResult result = new PluginResult(PluginResult.Status.OK, (new Date()).toString());
      callbackContext.sendPluginResult(result);
    }
    return true;
  }

  private String generateEncrypt(String text) throws Exception
  {
    String encryptedString = encrypt(text) ;
    String decryptedString = decrypt(encryptedString) ;

    System.out.println(text);
    System.out.println(encryptedString);
    System.out.println(decryptedString);
    return encryptedString;
  }

  private static String algorithm = "AES";
  private static byte[] keyValue = "sQrmA/0yvg1u9BozEcL9Yg==".getBytes();

  private static Key generateKey() throws Exception
  {
    return new SecretKeySpec(keyValue, algorithm);
  }

  private static String encrypt(String strToEncrypt)
  {
    try
    {
      Key key = generateKey();
      Cipher cipher = Cipher.getInstance(algorithm);
      cipher.init(Cipher.ENCRYPT_MODE, key);
      return android.util.Base64.encodeToString(cipher.doFinal(strToEncrypt.getBytes(StandardCharsets.UTF_8)), android.util.Base64.DEFAULT);
    }
    catch (Exception e)
    {
      System.out.println("Error while encrypting: " + e.toString());
    }
    return null;
  }

  private static String decrypt(String strToDecrypt) {
    try
    {
      Key key = generateKey();
      Cipher cipher = Cipher.getInstance(algorithm);
      cipher.init(Cipher.DECRYPT_MODE, key);
      return new String(cipher.doFinal(android.util.Base64.decode(strToDecrypt, android.util.Base64.DEFAULT)));

    }
    catch (Exception e) {
      System.out.println("Error while decrypting: " + e.toString());
    }
    return null;

  }
}
